export default function Gallery3() {
  const photos = ["/images/img12.jpg", "/images/img13.jpg"];

  return (
    <div className="gallery-grid">
      {photos.map((p, i) => (
        <img key={i} src={p} alt="ngo work" />
      ))}
    </div>
  );
}
