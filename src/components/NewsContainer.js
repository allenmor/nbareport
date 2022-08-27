import React from "react";
import "./News.css";

function NewsContainer() {
  return (

    <div className="tilesDiv">
      <ul class="tilesWrap">
        <li>
          <h2>01</h2>
          <h3>Title 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button>Read more</button>
        </li>
        <li>
          <h2>02</h2>
          <h3>Title 2</h3>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries.
          </p>
          <button>Read more</button>
        </li>
        <li>
          <h2>03</h2>
          <h3>Title 3</h3>
          <p>
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s.
          </p>
          <button>Read more</button>
        </li>
        <li>
          <h2>04</h2>
          <h3>Title 4</h3>
          <p>
            With the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button>Read more</button>
        </li>
      </ul>
      </div>

  );
}

export default NewsContainer;
