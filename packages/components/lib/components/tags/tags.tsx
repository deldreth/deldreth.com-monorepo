import { Component, Prop, Watch, h } from "@stencil/core";

@Component({
  tag: "dae-tags",
  styleUrl: "tags.scss",
  shadow: true
})
export class Tags {
  @Prop()
  tags: string;
  parsedTags: string[] = [];

  componentWillLoad() {
    this.parseTags(this.tags);
  }

  @Watch("tags")
  parseTags(newValue: string) {
    if (newValue) {
      this.parsedTags = JSON.parse(newValue);
    }
  }

  render() {
    return (
      <div class="tags">
        {this.parsedTags.map(tag => (
          <a class="tag">{tag}</a>
        ))}
      </div>
    );
  }
}
