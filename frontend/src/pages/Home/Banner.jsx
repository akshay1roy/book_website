import bannerImg from "../../assets/banner.png";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      {/* left */}

      <div className="md-w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>

      {/* right */}
      <div className="md-w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the lastest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer somethings for
          everyone.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;
