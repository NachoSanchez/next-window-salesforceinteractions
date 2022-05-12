
function onClick() {
  window.SalesforceInteractions.sendEvent({
    interaction: {
        name: window.SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
        catalogObject: {
            type: "Category",
            id: () => window.location.search.split("=")[1],
            attributes: {
                url: () => window.location.href,
                name: () => window.location.search.split("=")[1],
            }
        }
    },
    user: { identities: { emailAddress: "ignacio.sanchez@devsutd.com" } }
  });
}

const button = document.getElementById("button");
button?.addEventListener('click', onClick);

export default function LogSalesforceActions () {
  return null
}