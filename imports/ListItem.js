export class ListItem {
  id;
  text;
  checked = false;
  constructor(str) {
    this.id = Date.now();
    this.text = str;
  }
  invertChecked() {
    this.checked = !this.checked;
    return this;
  }
}