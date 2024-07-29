//
import Link from "next/link";
import Image from 'next/image';
import "st/notfound.css";
export default function NotFoundPage() {
    return (<div className="page-not-found">
      <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE60lEQVR4nO1b/08URxTf9jfbf6i/79LIzQLC7ikURanVprWm+K2k1eQuKIgicF6llPKlJ9ydCBRCaW39QqmYxhBrbNMqatqkjXJQv1I5RDjCa96Wndu93TvuWs499+YlL0zmzd7M++x7b98MbzguhnJyNr7KO6QCXnTuFohUaQfmHdIugTjzRVF8hUtAL/EO5z6BSNMCkcGW7JAfC0Teg7rqNHe5XC/zRA5avsDnxlJABwKvvPnogLK3dkDjx59C6+d+WzDqgjppdUQX51Sf15p9vbcZFhYWwG6EOh3zfKJzBxFjAgaH6Jt/z5bKq4S6bdoatQQ+VxI5wSHtVTs8Jz6jg5eWluDCdxcVxnYqfZlM6A46N+CJ5FY7TgZO04GokNp/YWQ0pb5MJtSRAkAkNwOAj2MBimmPjMLwyCW9uSfRZwsLsCsxAAIJLOCD/VXQ3Ttga0Yd4wIgZBnzDACJWQDHXICwGOC2OhixIEjYVwDYZ5CwPABYIkRYJggsFSYv8F5AlEph6Mw5OD98EaSS8rjjtmzfCcGefrg89qPC2N68bWfK833kqoGxK1fhUG1DZgBwum+QHjz4urpNx7SfDMLi4qLhoAL72nz+pOdylm6Fp3NzyrPz8wuwtmCDtQAUl22HZ/PzVKHe/i8NY7zNbSue2HhOtCQ13+BX3+qey5c3WQvA2fMjugXFAlCwvgxmZ59S+fXxW1B9pBGqj3rgxvgt2j8TDkO+M7EyeLYfiUQyB4Dyt983mHUsAAdrG6jszt0QOApLqAzbdydCVF51uD7hfN+P/mCwHEsBuDx2xbCgWADafYGobGDI8Bt9A0NUnigWvFtRaXr6bBkAFfsOGBZjBkBnoIfKsB37OyvJVb567WfT+SwD4NcbN+kitH6ZDgAqDxw0ncsyAFyHjtIF4BfgzNnhtAGQIzrh9m+/0zH9g19bC8Dreevhjz/v0AWc6hnQKbHaAByuO07l+P3HPMBSAOq9zXTymZkwFBZvSRsAmORMhKao3Of/N8myDABHYQncu/+ATt7S3mlQYjUBaGrpoLLp6b+pspYB0Obz04nvP3gIpKg0bQDkSRvh0eNpKsNsUpVZAsC6DZvhyZMZOnFdY5OpEqsFQFewl/ZPTv0FawuKrQXAq8nnMQhiMEwnAGjyKmHarH3GEgA6NQudmrqnJCYqhyajgQrbGLn/LwBauvbTL7r5tIT1CUXF5ekHwOfvhlSKklQL0abCmPYmmwqnUnTR0RlMPwB7P3Sb7ufNaPzmbdPNEG58tJshUvgGTIQmqbyq5hiV4VtPhhCo/e6a9AMgEBlK33xH+T97LONJkEpYNqNVErfD4fAsleMWuKbOozACpc0ptNvh3HUlyn7DbD4tbdux+/nEACHJ+GB2IHK8KVqGF48avNEytpU4ow5EBCJDc6uPLgh93mxMa0cXRCJGF8LNjZpQJcuqRc3NPbP+SExYNvNvzg0rjO1447AiNdD9hXKOgOw/1Weo5U2G3dV1yqEq/v0v6+VZgYTECiQ4ViBBWIGEe7WC4IvGPIsBEosBHIsBJMtjgEDkPVkLgEPaxeWIRXlWL8QydjgJh1fHlm9UZtfbJ9Kj15zONcrdwSx1gwrdvWG8Tpo9b1/uMtwf5vDyNN4Yt7E7oNkvv3mD8pxKGBMwMGKE5IlcawtGXXIlkfq8hv4B2MuEokYqzNQAAAAASUVORK5CYII="
      priority width="300" height="300" alt="img error 404" />
      <div>
        <h2>Something went wrong!</h2>
        <Link href={"/dashboard"} className="link">Go home</Link>
      </div>
    </div>);
}
