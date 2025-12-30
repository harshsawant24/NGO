export default function Gallery2() {
  const photos = [
      "/images/img10.jpg",
    "/images/img8.jpg", 
    "/images/img9.jpg",
    ];

  return (
    <div className="gallery-grid">
      {photos.map((p, i) => (
        <img key={i} src={p} alt="ngo work" />
      ))}
    </div>
  );
}
