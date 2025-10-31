"use client";

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg, #f06, #4a90e2)',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          width: '80%',
          maxWidth: '600px',
          animation: 'fadeIn 1.5s ease-out',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '20px',
            animation: 'slideIn 1s ease-out',
          }}
        >
          Welcome to Our Service
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            color: '#f1f1f1',
            opacity: 0.8,
            animation: 'fadeIn 2s ease-out',
          }}
        >
          Discover innovative solutions for your business. Fast, reliable, and
          secure.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#f06',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '30px',
            transition: 'transform 0.2s ease-in-out, background-color 0.2s ease',
          }}
          onMouseOver={(e:any) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.backgroundColor = '#4a90e2';
          }}
          onMouseOut={(e:any) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#f06';
          }}
        >
          This is to test my CI/CD
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-30px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

