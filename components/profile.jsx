"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoadingState from './LoadingState';
import Link from 'next/link'




export default function Profile() {
  const [profileData, setprofileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/profiles", { next: { revalidate: 6000} });
        if (response.ok) {
          const res = await response.json();
          setprofileData(res.profiles);
          setIsLoading(false);
        } else {
          alert('An error occurred');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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

          {isLoading ? (
        <LoadingState />
      ) : (
        <>

          {profileData.map(profile => (
            <div key={profile.id} className="col-md-3 mb-4">
              <ProfileCard {...profile} />
            </div>
          ))}
           </>
      )}
        </div>
        <div className="row">
        <div className='col text-center'> <Link href="https://www.profilesuite.com/discover" target='_blank'><button className="profile-btn">View More</button></Link></div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ name, location, intro, image, skills }) {
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
          src={image}
          alt={`${name}'s Cover`}
          layout="fill"
          objectFit="cover"
          className='img-responsive'
        />
      </div>
      <div className="profile-address small">{location}</div>
      <div className="sports-field"><i>{skills}</i></div>
      <p className="profile-intro">{intro}</p>      
    </div>
  );
}

