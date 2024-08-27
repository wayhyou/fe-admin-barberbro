import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className='container mx-auto flex flex-row items-center'>
      <div className='flex flex-col w-2/3'>
        <div>Barberbro</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, beatae! Nam temporibus, omnis error vitae quasi consectetur odio voluptates quidem eaque corporis laudantium consequuntur laborum aliquam facilis voluptas doloremque nesciunt voluptate sapiente accusantium perferendis ducimus. Odio suscipit quas exercitationem expedita sed dolor, commodi rem ratione, ipsa ipsum minus cum. Expedita delectus, perspiciatis adipisci sint voluptatum qui rem saepe veritatis excepturi! Aperiam fugit laboriosam vero numquam natus dicta aliquid optio nemo! Eaque, optio doloribus itaque ipsa alias, illo, excepturi provident esse laudantium est tenetur inventore numquam? Sint reprehenderit eligendi eos in, eius laborum mollitia sit ullam, dolorem delectus ad possimus earum.</div>
        <div className='flex flex-row gap-4 justify-end items-center py-5 px-8'>
          <Link to="/register/customer">Register as Customer</Link>
          <Link to="/register/barbershop">Register as Barbershop</Link>
        </div>
      </div>

      <div className='mx-auto my-auto w-1/3 p-4'>
        <img src="https://marketplace.canva.com/EAFzl_fI3WU/1/0/1600w/canva-red-and-black-illustrative-barber-shop-logo-A5183UnPgkI.jpg" alt="barberbro" width='100%' />
      </div>
    </div>
  )
}

export default WelcomePage