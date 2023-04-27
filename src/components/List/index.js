export default function List({locations}) {
  return (
    <div>
      <h1>Study Location List</h1>
      {locations.map((location) => (
        <div key={location.id}>
          <p>{location.name}</p>
        </div>
      ))}
    </div>
  );
}
