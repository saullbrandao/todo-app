export function CheckBox({ id = '', ...props }) {
  return <input {...props} id={id} type="checkbox" className="w-6 h-6" />
}
