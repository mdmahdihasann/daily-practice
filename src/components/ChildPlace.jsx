
const ChildPlace = ({ placeId, id, onComplete, parentId }) => {
  const childPlace = placeId[id].childIds;
  return (
    <li>
      {placeId[id].title} <button style={{backgroundColor: "#020202", color: "#fff", marginBottom: "5px"}} onClick={()=>{onComplete(parentId, id)}}>delete</button>
      {childPlace.length > 0 && (
        <ol>
          {childPlace.map((childId) => (
            <ChildPlace key={childId} id={childId} placeId={placeId} parentId={id} onComplete={onComplete} />
          ))}
        </ol>
      )}
    </li>
  );
};

export default ChildPlace;
