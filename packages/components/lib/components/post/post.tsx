import { h, Component, Prop, Watch } from "@stencil/core";

@Component({
  tag: "dae-post",
  styleUrl: "post.scss",
  shadow: true
})
export class Post {
  @Prop()
  article: string;

  @Prop()
  description: string;

  @Prop()
  date: string;

  @Prop()
  image: string;

  @Prop()
  tags: string;

  render() {
    return (
      <div class="card">
        <div class="card-image">
          <figure class="image is-3by2">
            <img src={this.image} alt={this.article} />
          </figure>
        </div>

        <div class="card-content">
          <h2 class="title">{this.article}</h2>
          <p class="subtitle" innerHTML={this.description} />

          <time>{this.date}</time>

          <dae-tags tags={this.tags} />
        </div>
      </div>
    );
  }
}
