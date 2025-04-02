import { useLoaderData, Form } from "@remix-run/react";

export const loader = async () => {
  const response = await fetch("http://localhost:3000/mappings");
  return response.json();
};

type Mapping = {
  id: string;
  inputField: string;
  ehrField: string;
  ehrSystem: string;
};

export default function MappingPage() {
  const mappings = useLoaderData<Mapping[]>();

  return (
    <div>
      <h1>Field Mappings</h1>
      <ul>
        {mappings.map((mapping) => (
          <li key={mapping.id}>
            {mapping.inputField} → {mapping.ehrField} ({mapping.ehrSystem})
          </li>
        ))}
      </ul>
      <Form method="post">
        <h2>Add Mapping</h2>
        <label>
          Input Field:
          <input type="text" name="inputField" required />
        </label>
        <label>
          EHR Field:
          <input type="text" name="ehrField" required />
        </label>
        <label>
          EHR System:
          <input type="text" name="ehrSystem" required />
        </label>
        <button type="submit">Add Mapping</button>
      </Form>
    </div>
  );
}