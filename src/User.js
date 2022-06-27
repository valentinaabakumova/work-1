export default function User() {
  return (
    <form>
      <label>
        Chouse you ROLE:
        <select>
          <option value="1">super-admin</option>
          <option value="2">admin</option>
          <option selected value="3">
            user
          </option>
        </select>
      </label>
      <input type="submit" value="Chouse" />
    </form>
  );
}
