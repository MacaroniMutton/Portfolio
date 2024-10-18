from langchain.chains import create_history_aware_retriever, create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_community.vectorstores import FAISS
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_groq import ChatGroq
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import TextLoader
# from langchain import VectorstoreIndexCreator
import os

from dotenv import load_dotenv
load_dotenv()

os.environ['HF_TOKEN']=os.getenv("HF_TOKEN")
os.environ['GROQ_API_KEY'] = os.getenv('GROQ_API_KEY')
embeddings=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
llm=ChatGroq(model_name="Gemma2-9b-It")

loader = TextLoader('C:\\Users\\Manan Kher\\OneDrive\\Documents\\Portfolio_Website\\Final_Portfolio\\backend\\manan_info.txt')
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
splits = text_splitter.split_documents(documents)
vectorstore = FAISS.from_documents(documents=splits, embedding=embeddings)
retriever = vectorstore.as_retriever()

contextualize_q_system_prompt=(
    "Given a chat history and the latest user question"
    "which might reference context in the chat history, "
    "formulate a standalone question which can be understood "
    "without the chat history. Do NOT answer the question, "
    "just reformulate it if needed and otherwise return it as is."
)
contextualize_q_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", contextualize_q_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )

history_aware_retriever=create_history_aware_retriever(llm,retriever,contextualize_q_prompt)

system_prompt = (
    "You are a highly professional AI assistant representing Manan Kher, a skilled Computer Engineering student at Sardar Patel Institute of Technology, "
    "with a CGPA of 9.99. Manan has a diverse skill set, excelling in Data Science, Machine Learning, deep learning techniques (ANN, CNN, RNN, LSTM, GRUs), "
    "computer vision, NLP, transformer architectures, and backend development. His project experience includes building advanced solutions like a deepfake detector, "
    "a fashion recommender system, OCR models, and chatbot applications. "
    "Manan has actively participated in hackathons and has hands-on experience with real-world problem-solving in areas like AI and development. "
    "He is currently seeking internship opportunities in AI/ML, Data Science, or backend development, aiming to apply his knowledge and passion to impactful projects."
    "\n\n"
    "Your role is to provide clear, concise, and professional responses to questions regarding Manan's skills, background, projects, professional achievements, and academic record. "
    "Only use the retrieved context to answer questions, and stay focused on topics relevant to Manan Kher. "
    "If a question is outside of Manan's expertise or context is missing, respond politely with 'I don't have information on that.' "
    "Keep responses concise but informative, reflecting Manan's professionalism and expertise."
    "\n\n"
    "{context}"
)
qa_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )

question_answer_chain=create_stuff_documents_chain(llm,qa_prompt)
rag_chain=create_retrieval_chain(history_aware_retriever,question_answer_chain)

message_history = ChatMessageHistory()

def get_session_history(session_id:str)->BaseChatMessageHistory:
    if session_id:
        return message_history

conversational_rag_chain=RunnableWithMessageHistory(
        rag_chain,get_session_history,
        input_messages_key="input",
        history_messages_key="chat_history",
        output_messages_key="answer"
    )

def get_chatbot_response(question):
    response = conversational_rag_chain.invoke(
        {"input": question},
        config={
            "configurable": {"session_id":"default_session"}
        },
    )
    return response
