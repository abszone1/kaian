import { FormattedMessage } from "react-intl";


export function Contact() {
    const name = "abdalla"
    return (
      <>
        <h1>Contact</h1>
        <p>
          Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
          congue. In bibendum vestibulum orci et feugiat.
        </p>
        <section>
      <header>
        <FormattedMessage
          defaultMessage="Control Panel"
          description="title of control panel section"
        />
      </header>
      <ul>
        <li>
          <button>
            <FormattedMessage
              defaultMessage="Delete user {name}"
              description="Delete button"
              values={{
                name: name,
              }}
            />
          </button>
        </li>
      </ul>
    </section>
      </>
    )
  }
  