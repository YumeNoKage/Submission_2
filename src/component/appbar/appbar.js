class AppBar extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <head>
      <link
        rel="stylesheet"
        href="../node_modules/bootstrap/dist/css/bootstrap.min.css"
      />
    </head>
    <div class="appbar bg-dark d-flex justify-content-center align-items-center">
      <div class="list-surah m-auto">  
        <a href="#" class="d-flex pl-4 text-center text-light">
          <img src="../src/asset/icon/reading-book.svg" class="w-50 pt-4 pb-4 " ></img>
        </a>
      </div>
      <div class="list-surah m-auto">  
        <a href="#" class="d-flex pl-4 text-center text-light">
          <img src="../src/asset/icon/open-book.svg" class="w-50 pt-4 pb-4 "></img>
        </a>
      </div>
      <div class="list-surah m-auto">  
        <a href="#" class="d-flex pl-4 text-center text-light">
          <img src="../src/asset/icon/ques.svg" class="w-50 pt-4 pb-4"></img>
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define("app-bar", AppBar);
