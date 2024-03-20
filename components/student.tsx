import Image from 'next/image'


export default function Student({imgUrl, name, major}: {imgUrl: string, name: string, major: string}) {
    return (
      <div>
        <Image src={imgUrl} alt="picture of student" width="400" height="500"></Image>
        <h1>Name: {name}</h1>
        <p>Major: {major}</p>
      </div>
    )
}