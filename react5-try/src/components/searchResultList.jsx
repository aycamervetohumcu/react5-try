export function SearchResultList({ results }) {
    return (
      <div>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  