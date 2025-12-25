# 🛡️ Fidelis

> **"AI that remains Faithful."**

**Fidelis** is an intelligent spiritual companion for Catholics, designed to bridge the gap between ancient tradition and modern technology. Unlike generic AI chatbots, Fidelis uses **Retrieval-Augmented Generation (RAG)** to ground every answer in official Church documents, minimizing hallucinations and ensuring doctrinal accuracy.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-black)
![Stack](https://img.shields.io/badge/built%20with-React%20Native%20%2B%20Supabase-green)

## 🚀 Features

### 🕯️ Module A: The Sacristan (Liturgy)
A specialized assistant for Altar Servers and Sacristans.
- **Rubric Checks:** "When do I ring the bell during the Epiclesis?"
- **Setup Lists:** Instant checklists for Solemnities, Feasts, and Memorials.
- **Source:** *General Instruction of the Roman Missal (GIRM)*.

### 📖 Module B: The Theologian (Doctrine)
A Q&A engine for deep theological inquiry.
- **Citation Engine:** Every answer cites specific paragraph numbers (e.g., `[CCC 1324]`).
- **Hallucination Guard:** If the answer isn't in the source text, Fidelis admits ignorance rather than inventing doctrine.
- **Source:** *Catechism of the Catholic Church (CCC)*.

### 🎙️ Module C: The Listener (Homily-to-Action)
An audio tool to operationalize Sunday sermons.
- **Record & Transcribe:** Captures the homily using the device microphone.
- **Action Plans:** Generates a 3-point summary and a specific "Weekly Mission" based on the priest's message.

---

## 🛠️ Tech Stack

* **Frontend:** [React Native](https://reactnative.dev/) (via [Expo SDK 50+](https://expo.dev/))
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for Native)
* **Backend / Database:** [Supabase](https://supabase.com/) (PostgreSQL)
* **Vector Search:** `pgvector` extension for storing embeddings.
* **AI Orchestration:** [LangChain.js](https://js.langchain.com/)
* **LLM:** OpenAI `gpt-4o-mini`
* **Audio Processing:** OpenAI Whisper API

---

## 🏗️ Architecture

```mermaid
graph LR
    A[User Query] --> B(Fidelis App)
    B --> C{Supabase Vector Store}
    C -- Retrieval --> D[Relevant Documents]
    D --> E[OpenAI GPT-4]
    E -- Contextual Answer --> B
