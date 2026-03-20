const Ligth = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[2, -2, 2]} intensity={100} />
    </>
  );
};

export default Ligth;
