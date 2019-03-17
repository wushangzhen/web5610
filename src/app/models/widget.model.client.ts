export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  name: String;

  constructor(type, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.text = text;
    this.name = 'initial';
  }
}

