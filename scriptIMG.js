Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  ]).then(start)

  async function start() {
      const container = document.createElement('div')
      container.style.position = 'relative'
      document.body.append(container)
      const labeledFaceDescriptors = await loadLabeledImages
  