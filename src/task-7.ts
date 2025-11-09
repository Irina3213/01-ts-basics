function getMessage(): Promise<string> {
  return new Promise((resolve: (value: string) => void) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));
