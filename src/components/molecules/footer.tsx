import Link from 'next/link'
import Image from 'next/image'
import Blob from 'components/atoms/blob'

export default function Footer() {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Link href={'mailto:clemmurphy@gmail.com'}>
        <Blob
          style={{
            backgroundColor: 'var(--color-neutral)',
            height: '30px',
            width: '30px',
          }}
        >
          <Image
            height={20}
            width={20}
            src='https://img.icons8.com/fluency-systems-regular/48/new-post.png'
            alt='email me'
            style={{ marginTop: '5px', marginLeft: '5px' }}
          />
        </Blob>
      </Link>
      <Link href={'https://linkedin.com/in/clemmurphydev'} target='_blank'>
        <Blob
          style={{
            backgroundColor: 'var(--color-neutral)',
            height: '30px',
            width: '30px',
          }}
        >
          <Image
            height={24}
            width={24}
            src='https://img.icons8.com/windows/32/linkedin.png'
            alt='find me on linkedin'
            style={{ marginTop: '3px', marginLeft: '3px' }}
          />
        </Blob>
      </Link>
    </footer>
  )
}
