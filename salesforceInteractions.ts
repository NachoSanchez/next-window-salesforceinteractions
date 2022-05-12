const button = document.getElementById("button");
function onMount() {
  console.log('other script :', window.SalesforceInteractions.sendEvent({

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

}));
}

button?.addEventListener('click', onMount);

export default function LogSalesforceActions () {
  return null
}