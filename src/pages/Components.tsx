import Tabs from "../components/tabs/Tabs";
import Typeahead from "../components/typeahead/Typeahead";

const Components = () => {
  return (
    <div className="container">
      <h1>Component Design</h1>
      <h2>Tabs</h2>
      <p>This component demonstrates creation of a tab </p>
      <Tabs tabNames={["Frontend", "Backend"]} />
      <h2>Autocomplete</h2>
      <p>
        This component demonstrates creation of a typeahead or autocomplete
        component.{" "}
      </p>
      <Typeahead />
    </div>
  );
};

export default Components;
