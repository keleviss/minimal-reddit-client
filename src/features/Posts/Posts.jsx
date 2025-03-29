import pcmasterraceIcon from "../../assets/pcmasterrace.png";
import javascriptIcon from "../../assets/javascript.png";
import Post from "../../components/Post/Post";

const posts = [
  {
    id: "1jmebwa",
    subreddit: "pcmasterrace",
    subredditImg: pcmasterraceIcon,
    title: "Microsoft is removing the BYPASSNRO command which allowed users to skip the Microsoft account requirement on Windows setup",
    body: "This is so dumb. Especially for folks who deal with enterprise environments. 'OOBE\\BYPASSNRO' is a lifesaver. What a slap in the face! For those who don't know, running this command during Windows setup allows you to select 'I don't have Internet' in the network selection page, allowing you to not have to sign into a Microsoft account and make a local account instead. They're removing that. There is still registry workarounds (for now) but really Microsoft???",
    created: 1743230904.0,
    image: "https://preview.redd.it/cnb9o4c63nre1.jpeg?auto=webp&amp;s=4cf882685dbf7db66498afc49c84acf142e463c9",
    ups: 288,
    downs: 31,
    comments: 5,
    post_hint: "image",
    is_gallery: false,
    is_video: false,
  },
  {
    id: "2jab4ai",
    subreddit: "javascript",
    subredditImg: javascriptIcon,
    title: "React 18 introduces new concurrent features",
    body: "React 18 is here with exciting new features like automatic batching, transitions, and a new startTransition API. These features make it easier to build responsive and fast applications. Have you tried it yet?",
    created: 1743231904.0,
    image: null,
    ups: 512,
    downs: 12,
    comments: 42,
    post_hint: "",
    is_gallery: false,
    is_video: false,
  }
];

export default function Posts() {

  return (
    <ul>
      {posts.map((post) =>
        <div key={post.id}>
          <hr className="text-stone-200"></hr>
          <Post postData={post} />
        </div>
      )}
    </ul>
  );
}