export const Alert = ({message = 'Mensaje del alert...', color = 'primary'}) => {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {message}
    </div>
  );
};