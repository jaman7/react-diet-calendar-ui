const Proteins = () => {
  const renderIcons = () => {
    const icons = [1, 2, 3, 4, 5];

    return icons?.map(item => (
      <figure className="protein__figure" key={`figure-${item}`}>
        <img src={`img/${item}.svg`} alt="" className="protein__img img-fluid" />
      </figure>
    ));
  };

  return (
    <div className="protein">
      <p>select your protein options</p>
      <div className="protein__icons">{renderIcons()}</div>
    </div>
  );
};

export default Proteins;
