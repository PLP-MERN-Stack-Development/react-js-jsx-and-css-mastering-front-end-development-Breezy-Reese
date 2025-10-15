import { useEffect, useState } from "react";
import Card from "../Card";

// Simple Latin to English translation mapping for common words
const latinToEnglish = {
  "sunt": "they are",
  "aut": "or",
  "facere": "to do",
  "repellat": "repels",
  "provident": "provide",
  "occaecati": "blinded",
  "excepturi": "except",
  "optio": "option",
  "reprehenderit": "represent",
  "quia": "because",
  "et": "and",
  "suscipit": "supports",
  "recusandae": "refuse",
  "consequuntur": "follow",
  "expedita": "expedited",
  "cum": "with",
  "molestiae": "troubles",
  "ut": "as",
  "quas": "which",
  "totam": "total",
  "nostrum": "our",
  "rerum": "things",
  "est": "is",
  "autem": "however",
  "rem": "thing",
  "eveniet": "happens",
  "architecto": "architect",
  "qui": "who",
  "esse": "to be",
  "tempore": "time",
  "vitae": "life",
  "sequi": "follow",
  "sint": "are",
  "nihil": "nothing",
  "dolor": "pain",
  "beatae": "blessed",
  "ea": "it",
  "dolores": "pains",
  "neque": "neither",
  "fugiat": "flees",
  "blanditiis": "flatteries",
  "voluptate": "pleasure",
  "porro": "further",
  "vel": "or",
  "reiciendis": "rejecting",
  "aperiam": "open",
  "non": "not",
  "debitis": "debts",
  "possimus": "we can",
  "nisi": "unless",
  "nulla": "none",
  "exercitationem": "exercise",
  "ipsa": "itself",
  "sit": "is",
  "iusto": "just",
  "sed": "but",
  "quo": "where",
  "iure": "right",
  "voluptatem": "pleasure",
  "omnis": "all",
  "eligendi": "choosing",
  "ad": "to",
  "doloribus": "pains",
  "accusantium": "accusing",
  "quis": "who",
  "pariatur": "pleases",
  "eius": "his",
  "odio": "hate",
  "labore": "work",
  "eum": "him",
  "ullam": "any",
  "saepe": "often",
  "voluptatem": "pleasure",
  "adipisci": "admire",
  "amet": "love",
  "assumenda": "assume",
  "culpa": "fault",
  "hic": "here",
  "commodi": "convenient",
  "nesciunt": "ignorant",
  "tenetur": "held",
  "doloremque": "painful",
  "ipsam": "itself",
  "sunt": "are",
  "voluptatum": "pleasures",
  "illo": "there",
  "magnam": "great",
  "facilis": "easy",
  "dolore": "pain",
  "placeat": "pleases",
  "quibusdam": "some",
  "quo": "where",
  "vitae": "life",
  "magni": "great",
  "enim": "for",
  "nemo": "no one",
  "saepe": "often",
  "quidem": "indeed",
  "repellat": "repels",
  "sequi": "follow",
  "eos": "them",
  "aspernatur": "harsh",
  "corporis": "body",
  "harum": "these",
  "mollitia": "softness",
  "nobis": "us",
  "aliquid": "something",
  "perspiciatis": "insights",
  "ab": "from",
  "accusantium": "accusing",
  "voluptates": "pleasures",
  "perspiciatis": "insights",
  "ea": "it",
  "nemo": "no one",
  "repudiandae": "repudiate",
  "veniam": "forgiveness",
  "quaerat": "seeks",
  "alias": "otherwise",
  "fugiat": "flees",
  "voluptatem": "pleasure",
  "omnis": "all",
  "voluptatibus": "pleasures",
  "tenetur": "held",
  "neque": "neither",
  "asperiores": "worse",
  "eos": "them",
  "fuga": "flight",
  "maiores": "greater",
  "voluptatibus": "pleasures",
  "ullam": "any",
  "ratione": "reason",
  "vero": "true",
  "nisi": "unless",
  "quos": "whom",
  "veritatis": "truth",
  "error": "error",
  "vero": "true",
  "laudantium": "praiseworthy",
  "delectus": "chosen",
  "reiciendis": "rejecting",
  "minima": "least",
  "voluptatibus": "pleasures",
  "accusamus": "accuse",
  "in": "in",
  "beatae": "blessed",
  "quibusdam": "some",
  "odit": "hates",
  "sapiente": "wise",
  "itaque": "therefore",
  "id": "it",
  "praesentium": "present",
  "odit": "hates",
  "sapiente": "wise",
  "amet": "love",
  "occaecati": "blinded",
  "voluptatem": "pleasure",
  "incidunt": "happen",
  "distinctio": "distinction",
  "ut": "as",
  "voluptas": "pleasure",
  "mollitia": "softness",
  "animi": "spirits",
  "quo": "where",
  "iste": "that",
  "corrupti": "corrupt",
  "eius": "his",
  "sit": "is",
  "eligendi": "choosing",
  "minima": "least",
  "perferendis": "prefer",
  "recusandae": "refuse",
  "assumenda": "assume",
  "consectetur": "joined",
  "architecto": "architect",
  "ipsam": "itself",
  "fuga": "flight",
  "accusamus": "accuse",
  "perferendis": "prefer",
  "illo": "there",
  "voluptas": "pleasure",
  "facere": "to do",
  "totam": "total",
  "illum": "light",
  "reprehenderit": "represent",
  "quos": "whom",
  "placeat": "pleases",
  "officia": "offices",
  "impedit": "prevents",
  "repudiandae": "repudiate",
  "nam": "name",
  "voluptas": "pleasure",
  "delectus": "chosen",
  "officiis": "offices",
  "fugiat": "flees",
  "perspiciatis": "insights",
  "ipsa": "itself",
  "laboriosam": "laborious",
  "aperiam": "open",
  "fugit": "flees",
  "maiores": "greater",
  "voluptatibus": "pleasures",
  "ullam": "any",
  "ratione": "reason",
  "natus": "born",
  "earum": "their",
  "fuga": "flight",
  "maiores": "greater",
  "deserunt": "desert",
  "ratione": "reason",
  "vero": "true",
  "tempora": "times",
  "vero": "true",
  "tempora": "times",
  "quo": "where",
  "quis": "who",
  "totam": "total",
  "consequatur": "follows",
  "repudiandae": "repudiate",
  "debiti": "debts",
  "magnam": "great",
  "illum": "light",
  "cupiditate": "desire",
  "magnam": "great",
  "ea": "it",
  "veniam": "forgiveness",
  "maiores": "greater",
  "ullam": "any",
  "atque": "and",
  "quo": "where",
  "iste": "that",
  "expedita": "expedited",
  "quos": "whom",
  "doloribus": "pains",
  "ducimus": "lead",
  "possimus": "we can",
  "quisquam": "anyone",
  "similique": "similar",
  "porro": "further",
  "ipsam": "itself",
  "eos": "them",
  "veritatis": "truth",
  "officiis": "offices",
  "exercitationem": "exercise",
  "fugit": "flees",
  "necessitatibus": "necessities",
  "totam": "total",
  "omnis": "all",
  "rerum": "things",
  "expedita": "expedited",
  "quidem": "indeed",
  "cumque": "and",
  "explicabo": "explain"
};

function translateLatinToEnglish(text) {
  if (!text) return text;

  // Split text into words and translate each word
  const words = text.split(/\s+/);
  const translatedWords = words.map(word => {
    // Remove punctuation for lookup
    const cleanWord = word.replace(/[.,!?;:]/g, '').toLowerCase();
    // Return translated word or original if not found
    return latinToEnglish[cleanWord] || word;
  });

  return translatedWords.join(' ');
}

export default function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        // Translate Latin text to English
        const translatedPosts = posts.map((post) => ({
          ...post,
          title: translateLatinToEnglish(post.title),
          body: translateLatinToEnglish(post.body),
        }));
        setData(translatedPosts);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        className="border p-2 rounded mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.slice(0, 20).map((item) => (
          <Card key={item.id} title={item.title}>
            <p>{item.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
