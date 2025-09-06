const works = [
  "Playground Equipment: Slides, chain swings, sea-saws, merry-go-rounds",
  "Government & Contractor Works: Trolleys, custom industrial fabrication",
  "Schools & Hospitals: Durable and safe structures",
  "Public & Society Parks: Benches, canopies, play structures",
  "Gates, Grills & Railings: Modern and long-lasting designs",
  "SS 304 Steel Work: Professional quality assurance in stainless steel",
  "Industrial Sheds: Design and fabrication with structural strength",
];

export default function Services() {
  return (
    <section >
      <h2 >we speciaize in fabrication custom work,offering high-quality solution for: </h2>
      <ul >
        {works.map((item, index) => (
          <li key={index} >
            {item}
          </li>
        ))}
      </ul>

      <Maintenance/>
    </section>
  );
}


function Maintenance() {
  return (
    <section >
      <h2 >Maintenance & Repair</h2>
      <p >
        We provide end-to-end maintenance and repair services for machines across
        government and private companies. Our trained team ensures minimum
        downtime and maximum efficiency for your equipment.
      </p>
    </section>
  );
}