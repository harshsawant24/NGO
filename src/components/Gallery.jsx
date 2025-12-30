
export default function Gallery() {
  const photos = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img11.jpg",
  
  ];

  return (
    <div className="gallery-grid">
      {photos.map((p, i) => (
        <img key={i} src={p} alt="ngo work" />
      ))}

    </div>
  );
}
