import VideoProps from "../../types/video";

export default function Video({ title, description }: VideoProps) {
  return (
    <div className="m-4 container">
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
