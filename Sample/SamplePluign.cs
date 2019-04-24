using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;

namespace MyPlugin
{
	public class SamplePluign : IPlugin
	{
		private ITracingService trace;

		public void Execute(IServiceProvider serviceProvider)
		{
			try
			{
				trace = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
				IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
				IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
				IOrganizationService service = serviceFactory.CreateOrganizationService((context.UserId));

				trace.Trace("Pluign has been started and collected all necessary object");

				trace.Trace($"Pluign stage is {context.Stage.ToString()}, message is {context.MessageName} and depth is {context.Depth.ToString()}");

				using (OrganizationServiceContext orgContext = new OrganizationServiceContext(service))
				{
					Process(context, service, orgContext);
				}

				trace.Trace("Plugin execution ends");
			}
			catch (Exception ex)
			{
				trace.Trace($"{this.GetType().Name} FAILED. {ex.Message}");
				throw ex;
			}
		}

		private void Process(IPluginExecutionContext context, IOrganizationService service, OrganizationServiceContext orgContext)
		{
			trace.Trace("In Process function");

			trace.Trace("Process function ends");
		}
	}
}
