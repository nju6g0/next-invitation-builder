import { use } from "react";
import { WeddingTemplate, PartyTemplate } from "../index";

function MyComponent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  console.log(slug);

  const renderPage = () => {
    switch (slug) {
      case "123":
        return <WeddingTemplate />;
      case "456":
        return <PartyTemplate />;
      default:
        return <div>Page not found</div>;
    }
  };
  return <div>{renderPage()}</div>;
}

export default MyComponent;
