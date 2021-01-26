import {
    makeExecutableSchema,
    mergeTypeDefs,
    mergeResolvers,
    loadFilesSync,
  } from 'graphql-tools';
  import path from 'path';
  
  // api폴더 내부의 graphql 확장자를 가진 모든 파일을 배열 형태로 가져옴
  const allTypes = loadFilesSync(path.join(__dirname, '../api/**/*.graphql'));
  
  // api폴더 내부의 resolvers.* 확장자를 가진 모든 파일을 배열 형태로 가져옴
  const allResolvers = loadFilesSync(
    path.join(__dirname, '../api/**/*.resolvers.*')
  );
  
  // 스키마 생성
  const schema = makeExecutableSchema({
      // 가져온 graphql 타입들을 하나로 합쳐줌
    typeDefs: mergeTypeDefs(allTypes),
    // 가져온 resover 함수들을 하나로 합쳐줌
    resolvers: mergeResolvers(allResolvers),
  });
  
  export default schema;