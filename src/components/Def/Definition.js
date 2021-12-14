import React from "react";
import "./Definition.css";
const Definition = ({ word, meanings, category, darkMode, t }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subtitle">{t("def")}</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="singleMean"
              style={{backgroundColor: darkMode? "white" :"#282d37",
              color: darkMode?"#282c34" :"white"}}>
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: darkMode? "white" :"black", width: "100%" }} />

                {def.example && (
                  <span>
                    <b>Пример: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Синонимы: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
    
  );
};

export default Definition;
