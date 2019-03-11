function createDom(domStr) {
  const dom = document.createElement("div");
  dom.innerHTML = domStr;
  return dom;
}
class Component {
  setState(state) {
    this.state = {
      ...this.state,
      ...state
    };
    const oldEl = this.el;
    this._renderDOM();
    this.onStateChange(oldEl, this, el);
  }
  _renderDOM() {
    this.el = createDom(this.render());
    el.addEventListener("click", this.handleClick);
    return this.el;
  }
}
class LikeButton extends Component {
  constructor() {
    this.state = {
      isLike: false
    };
  }
  setState(state) {
    this.setState(state);
  }
  handleClick() {
    this.setState({
      isLike: !this.state.isLike
    });
  }
  render() {
    return `
        <button class='like-button'>
          <span class='like-text'>${this.state.isLike ? "取消" : "点赞"}</span>
          <span>👍</span>
        </button>
    `;
  }
}
