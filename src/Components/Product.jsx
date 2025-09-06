const products = [
  "Pouch Packaging Machines – Reliable and efficient for food & consumer products",
  "Liquid Packaging Machines – Specially designed for water & milk packaging",
  "Mixtures & Conveyers – Smooth operations for industrial needs",
  "AHU Drums & Fans – Designed for durability and performance",
  "Transformers – Built with precision and quality assurance",
  "Vacuum Pumps – High-performance solutions for various industries",
  "Printing Machines – Robust machinery for printing industries",
  "Spare Parts – Complete spare part solutions for all our machines",
];

export default function Products() {
  return (
    <section >
      <h2 >Our Manufacturing Products</h2>
      <ul >
        {products.map((item, index) => (
          <li key={index} >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
