import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import CodeCard from '../components/CodeCard'

export default function PythonLessons() {
  return (
    <Layout title="Python Lessons">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Guide Ultime de Python 2025</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Toutes les bases pour exceller en data science.</p>
        </div>
      </section>

      {/* Content */}
      <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="container mx-auto px-4 space-y-12 max-w-3xl">
          <section>
            <h2 className="text-2xl font-bold mb-2">📌 Introduction</h2>
            <p>Python est l'outil indispensable des data scientists. Sa puissance et sa simplicité permettent d'analyser des données, de construire des modèles de machine learning ou encore de développer des API en un temps record.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">🔍 Pourquoi Python ?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Syntaxe claire et lisible</li>
              <li>Énorme écosystème de bibliothèques</li>
              <li>Support communautaire open source</li>
              <li>Intégration facile avec bases de données et outils cloud</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-2">🧰 Bibliothèques essentielles</h2>
            <div className="border-l-4 border-dsccOrange bg-lightGray p-4 rounded space-y-4">
              <div>
                <h3 className="font-semibold">1. NumPy – Calcul numérique</h3>
                <CodeCard>{`import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
produit = np.dot(a, b)`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">2. Pandas – Manipulation de données</h3>
                <CodeCard>{`import pandas as pd

df = pd.read_csv("data.csv")
df.info()
df["revenu_moyen"] = df["revenu"].mean()`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">3. Matplotlib & Seaborn – Visualisation</h3>
                <CodeCard>{`import matplotlib.pyplot as plt
import seaborn as sns

sns.histplot(df["âge"], kde=True)
plt.title("Distribution des âges")
plt.show()`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">4. Scikit-learn – Machine Learning</h3>
                <CodeCard>{`from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

X = df[["âge", "revenu"]]
y = df["achat"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(classification_report(y_test, y_pred))`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">5. Statsmodels – Analyse statistique</h3>
                <CodeCard>{`import statsmodels.api as sm

X = sm.add_constant(df["revenu"])
model = sm.OLS(df["score"], X).fit()
print(model.summary())`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">6. XGBoost / LightGBM / CatBoost – Boosting avancé</h3>
                <CodeCard>{`import xgboost as xgb

dtrain = xgb.DMatrix(X_train, label=y_train)
params = {"objective": "binary:logistic"}
bst = xgb.train(params, dtrain, num_boost_round=10)`}</CodeCard>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-2">🔄 Workflow type</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">1. Collecte de données</h3>
                <CodeCard>{`import requests

url = "https://api.exemple.com/data"
reponse = requests.get(url)
donnees = reponse.json()`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">2. Nettoyage & Prétraitement</h3>
                <CodeCard>{`df.dropna(inplace=True)
df["âge"] = df["âge"].astype(int)`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">3. Exploration des données (EDA)</h3>
                <CodeCard>{`df.describe()
df["catégorie"].value_counts()
sns.pairplot(df, hue="cible")`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">4. Feature Engineering</h3>
                <CodeCard>{`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
df[["revenu", "âge"]] = scaler.fit_transform(df[["revenu", "âge"]])`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">5. Modélisation & Évaluation</h3>
                <CodeCard>{`from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix

model = LogisticRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(confusion_matrix(y_test, y_pred))`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">6. Interprétation des résultats</h3>
                <CodeCard>{`import shap

explainer = shap.Explainer(model, X_train)
shap_values = explainer(X_test)
shap.plots.beeswarm(shap_values)`}</CodeCard>
              </div>
              <div>
                <h3 className="font-semibold">7. Déploiement (optionnel)</h3>
                <CodeCard>{`from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    prediction = model.predict([data["features"]])
    return jsonify(prediction=prediction.tolist())`}</CodeCard>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">📁 Structure conseillée</h2>
            <pre className="bg-lightGray p-4 rounded"><code>mon_projet/
├── data/
│   ├── raw/
│   └── processed/
├── notebooks/
├── src/
│   ├── scripts/
│   ├── models/
│   └── app/
├── tests/
├── docs/
├── requirements.txt
└── README.md</code></pre>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">🎓 Ressources recommandées</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>"Python pour l'analyse de données" – Wes McKinney</li>
              <li>Kaggle : compétitions et datasets</li>
              <li>OpenClassrooms : formations en ligne</li>
              <li>Documentation Scikit-learn</li>
              <li>Fast.ai – cours gratuits en deep learning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">✅ Conseils pratiques</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ne négligez jamais l'étape de nettoyage des données.</li>
              <li>Commencez simple avant de passer à des modèles complexes.</li>
              <li>Documentez chaque étape de vos notebooks et scripts.</li>
              <li>Automatisez vos pipelines avec Airflow ou Prefect.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">🚀 Conclusion</h2>
            <p>Maîtriser Python en data science va au-delà du simple code&nbsp;: c'est comprendre la donnée, modéliser intelligemment et livrer des solutions à impact. Ce guide vous donne les clés pour réussir vos projets en 2025 et au-delà.</p>
          </section>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
