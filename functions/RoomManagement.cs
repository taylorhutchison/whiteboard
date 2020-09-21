using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace FunctionApp
{
    public static class RoomManagement
    {
        [FunctionName("CreateRoom")]
        public static Task<string> SendMessage(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get")] object message,
        [SignalR(HubName = "chat")] IAsyncCollector<SignalRMessage> signalRMessages)
        {
            return Task.Run(() => { return System.Guid.NewGuid().ToString().Substring(0, 5); });
        }
    }
}