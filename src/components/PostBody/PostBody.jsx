import Media from "../Media/Media";

export default function PostBody({ bodyText, postMedia }) {

  return (
    <>
      <p className="text-sm">{bodyText}</p>
      <Media postMedia={postMedia}/>
    </>
  );
}