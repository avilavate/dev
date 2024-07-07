setTimeout(() => {
    try {
      throw new Error('up')
    } catch (err) {
      console.error('Will it catch?', err) // yes!
    }
  }, 1)