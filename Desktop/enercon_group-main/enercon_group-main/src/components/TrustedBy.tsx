import Image from 'next/image';
import './TrustedBy.css';

const clients = [
  { src: '/images/clients/ADNOC.png', alt: 'ADNOC' },
  { src: '/images/clients/client2.jpeg', alt: 'Client' },
  { src: '/images/clients/Coca-Cola.png', alt: 'Coca-Cola' },
  { src: '/images/clients/client4.jpeg', alt: 'Client' },
  { src: '/images/clients/client5.jpeg', alt: 'Client' },
  { src: '/images/clients/kuehne_nagel.webp', alt: 'Kuehne Nagel' },
  { src: '/images/clients/Siemens.png', alt: 'Siemens' },
  { src: '/images/clients/Weatherford.webp', alt: 'Weatherford' },
  { src: '/images/clients/client-whatsapp-1.jpeg', alt: 'Client' },
  { src: '/images/clients/client-whatsapp-2.jpeg', alt: 'Client' },
  { src: '/images/clients/client-whatsapp-3.jpeg', alt: 'Client' },
];

export default function TrustedBy() {
  return (
    <section className="trusted-by-section">
      <div className="container">
        <div className="trusted-by-card">
          <h2 className="trusted-by-heading">TRUSTED BY</h2>
          <div className="trusted-scroll">
            <div className="trusted-track">
              {[...clients, ...clients].map((client, i) => (
                <div key={i} className="trusted-card">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={200}
                    height={110}
                    className="trusted-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
