export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="footerTitle">FlowerPlant</div>
          <div className="muted">
            Address: 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark
          </div>
          <div className="muted">Email: flowplant123@flowerplant2026.dk</div>
          <div className="muted">Mobile: +452076765</div>
        </div>

        <div className="muted">© {year} FlowerPlant. All rights reserved.</div>
      </div>
    </footer>
  );
}