exports.handler = async (event, context) => {
  console.log("event", event);
  console.log("context", context);

  const { user } = context.clientContext;

  return {
    statusCode: user ? 200 : 401,
    body: "Hello, World"
  };
};
