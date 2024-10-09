import Image from 'next/image';

const profilesData = [
  {
    id: 1,
    name: "Joe Thomas",
    address: "Boca Raton, Florida",
    intro: "Happy is the new rich.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://images.pexels.com/photos/4401807/pexels-photo-4401807.jpeg",
    sports_field: "Boxing",
  },
  {
    id: 2,
    name: "Bryan Walker",
    address: "Boca Raton, Florida",
    intro: "Create impact with every strategy.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://images.pexels.com/photos/8464557/pexels-photo-8464557.jpeg",    
    sports_field: "Cycling",
  },
  {
    id: 3,
    name: "Adam Scott",
    address: "Boca Raton, Florida",
    intro: "Build with passion, design with purpose.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://images.pexels.com/photos/7188066/pexels-photo-7188066.jpeg",
    sports_field: "Football",
  },
  {
    id: 4,
    name: "Anna Williams",
    address: "Boca Raton, Florida",
    intro: "Craft experiences that matter.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg",
    sports_field: "Tennis",
  },
];



export default function Profile() {
  return (
    <section className="profile-section">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-12 text-center mb-4">
            <h2 className="profile-title fw-bold">Your Athletic Story, Perfectly Profiled</h2>
            <p className="lead">
              The go-to platform for athletes at every level to build, share, and amplify their sports profile.
            </p>

          </div>

          {profilesData.map(profile => (
            <div key={profile.id} className="col-md-3 mb-4">
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
        <div className="row">
            <div className='col text-center'><button className="profile-btn">View More</button></div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ name, address, intro, image, cover_image, sports_field }) {
  return (
    <div className="profile-card d-flex flex-column">
      <div className='d-flex'>
        <Image
          src={image}
          alt={`${name}'s Profile`}
          width={50}
          height={50}
          className="profile-image rounded-circle me-2"
        />
        <h3 className="profile-name">{name}</h3>
      </div>
      <div className='cover-image'>
        <Image
          src={cover_image}
          alt={`${name}'s Cover`}
          layout="fill"
          objectFit="cover"
          className='img-responsive'
        />
      </div>
      <div className="profile-address small">{address}</div>
      <div className="sports-field"><i>{sports_field}</i></div>
      <p className="profile-intro">{intro}</p>      
    </div>
  );
}

