import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'

export default function PythonLessons() {
  return (
    <Layout title="Python Lessons">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Ultimate Python Guide 2025</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">All the essentials for data scientists using Python.</p>
        </div>
      </section>

      {/* Content */}
      <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="container mx-auto px-4 space-y-12 max-w-3xl">
          <section>
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p>Whether you're entering data science or sharpening skills, this guide covers tools from data wrangling to machine learning.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Why Python for Data Science?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Readable and intuitive with a vast community.</li>
              <li>Rich ecosystem for manipulation, analysis and visualization.</li>
              <li>Widely used in production and ML pipelines.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Essential Libraries</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>NumPy</strong> – numerical computing foundation.</li>
              <li><strong>Pandas</strong> – data manipulation with DataFrames.</li>
              <li><strong>Matplotlib &amp; Seaborn</strong> – visualization tools.</li>
              <li><strong>Scikit-learn</strong> – classical machine learning.</li>
              <li><strong>SciPy</strong> – scientific computing.</li>
              <li><strong>Statsmodels</strong> – statistical modeling.</li>
              <li><strong>XGBoost / LightGBM / CatBoost</strong> – gradient boosting.</li>
              <li><strong>TensorFlow / PyTorch</strong> – deep learning frameworks.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Data Workflow</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Data collection with requests, BeautifulSoup, APIs.</li>
              <li>Cleaning: handle missing values and encode features.</li>
              <li>EDA with summaries and visualizations.</li>
              <li>Feature engineering and scaling.</li>
              <li>Model building and evaluation.</li>
              <li>Optional deployment with Flask, FastAPI or Streamlit.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Advanced Tools</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Jupyter Notebooks for prototyping.</li>
              <li>Airflow or Prefect for orchestration.</li>
              <li>Dask or Vaex for big data.</li>
              <li>Hugging Face Transformers for NLP.</li>
              <li>LangChain or LlamaIndex for LLM apps.</li>
              <li>MLflow for experiment tracking.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Learning Path</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Start with Python fundamentals.</li>
              <li>Explore NumPy, Pandas and Matplotlib.</li>
              <li>Clean data and practice EDA.</li>
              <li>Build ML models with scikit-learn.</li>
              <li>Dive into deep learning with PyTorch or TensorFlow.</li>
              <li>Work on a capstone project and use Git and Docker.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Sample Project Structure</h2>
            <pre className="bg-lightGray p-4 rounded"><code>{`my_project/
├── data/
├── notebooks/
├── scripts/
├── models/
├── requirements.txt
└── README.md`}</code></pre>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Resources</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Kaggle</li>
              <li>Scikit-learn Documentation</li>
              <li>Fast.ai</li>
              <li>Hugging Face</li>
              <li>Python Data Science Handbook</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Final Thoughts</h2>
            <p>Python remains essential for data science—mastering its ecosystem opens doors to impactful projects.</p>
          </section>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
